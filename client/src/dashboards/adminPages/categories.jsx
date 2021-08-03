import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminCategoriesAction,
  listAdvisorsAction,
  updateAdvisorsAction,
} from "redux/actions/actions";
import DataTable from "react-bs-datatable";

export const AdminCategories = () => {
  const dispatch = useDispatch();
  const adminCat = useSelector((state) => state.adminCategories);
  const { loading, categories } = adminCat;
  useEffect(() => {
    dispatch(adminCategoriesAction());
  }, [dispatch]);

  const tableHeaders = [
    { title: "#", prop: "index", sortable: true },
    { title: "name", prop: "name", sortable: true, filterable: true },
    { title: "actions", prop: "actions" },
  ];

  const onSortFunction = {
    name(value) {
      return value.toLowerCase();
    },
  };

  const tableBody =
    categories &&
    categories.map((category, i) => {
      return {
        index: i + 1,
        name: category.title,
        actions: (
          <div>
            <Link
              to={"/admin/categories/" + category.slug}
              className="btn btn-success"
            >
              Edit
            </Link>
          </div>
        ),
      };
    });

  return (
    <div>
      {loading && <h1>Loading</h1>}
      <DataTable
        tableHeaders={tableHeaders}
        tableBody={tableBody}
        initialSort={{ prop: "username", isAscending: true }}
        onSort={onSortFunction}
        rowsPerPage={10}
        rowsPerPageOption={[5, 10, 15, 20, 50]}
      />
    </div>
  );
};

export const AdminSingleCategory = ({ match }) => {
  const dispatch = useDispatch();
  const adminCat = useSelector((state) => state.advisors);
  const { loading, advisors } = adminCat;
  useEffect(() => {
    dispatch(listAdvisorsAction());
  }, [dispatch]);

  const handleCategory = (adv) => {
    if (adv.categories) {
      if (adv.categories.includes(match.params.slug)) {
        adv.categories = adv.categories.filter((a) => a !== match.params.slug);
      } else {
        adv.categories.push(match.params.slug);
      }
    } else {
      adv.categories = [match.params.slug];
    }
    dispatch(updateAdvisorsAction(adv));
  };

  const tableHeaders = [
    { title: "#", prop: "index", sortable: true },
    { title: "name", prop: "name", sortable: true, filterable: true },
    { title: "actions", prop: "actions" },
  ];

  const onSortFunction = {
    name(value) {
      return value.toLowerCase();
    },
  };

  const tableBody =
    advisors &&
    advisors.map((advisor, i) => {
      return {
        index: i + 1,
        name: advisor.name,
        actions: (
          <div>
            {advisor.categories &&
            advisor.categories.includes(match.params.slug) ? (
              <button
                onClick={() => handleCategory(advisor)}
                className="btn btn-danger"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => handleCategory(advisor)}
                className="btn btn-success"
              >
                Add
              </button>
            )}
          </div>
        ),
      };
    });

  return (
    <div>
      {loading && <h1>Loading</h1>}
      <DataTable
        tableHeaders={tableHeaders}
        tableBody={tableBody}
        initialSort={{ prop: "username", isAscending: true }}
        onSort={onSortFunction}
        rowsPerPage={10}
        rowsPerPageOption={[5, 10, 15, 20, 50]}
      />
    </div>
  );
};
