import React, { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";

//********components
import { fetchVendors } from "../../redux/vendors/vendorsActions";
import VendorCard from "../VendorCard";

//********styles
import styles from "./vendors-list.module.scss";

const VendorsList = () => {
  //********states & variables
  const dispatch = useDispatch();
  const { loading, vendors, error } = useSelector(
    (state) => state.vendorsState
  );
  const [infinitVendors, setInfinitVendors] = useState([]); //array for concating new vendors to fetched vendors
  const [page, setPage] = useState(1);

  //********functions
  const handleNext = () => {
    dispatch(fetchVendors(page + 1));
    setPage((page) => page + 1);
  };
  const setVendors = useCallback(() => {
    setInfinitVendors(infinitVendors.concat(vendors));
  }, [vendors]);

  useEffect(() => {
    //fetching vendors for the first time()first page of queries)
    dispatch(fetchVendors(1));
  }, []);
  useEffect(() => {
    //adding new vendors to update scroll list
    setVendors();
  }, [vendors, page]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : infinitVendors.length ? (
        <InfiniteScroll
          dataLength={infinitVendors.length}
          next={handleNext}
          hasMore={true}
          loader={loading ? <h3>Loading ...</h3> : ""}
          className={styles.infinit_scroll}
        >
          {infinitVendors.map((vendor) => (
            <VendorCard vendor={vendor.data} key={vendor.data.id} />
          ))}
        </InfiniteScroll>
      ) : (
        <h3>Please wait ...</h3>
      )}
    </>
  );
};

export default VendorsList;
