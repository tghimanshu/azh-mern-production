import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminCategoriesAction,
  listAdvisorsAction,
  updateAdvisorsAction,
} from "../../redux/actions/actions";
export const AdminCategories = () => {
  const dispatch = useDispatch();
  const adminCat = useSelector((state) => state.adminCategories);
  const { loading, categories } = adminCat;
  useEffect(() => {
    dispatch(adminCategoriesAction());
  }, [dispatch]);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {categories.length !== 0 &&
              categories.map((category, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{category.title}</td>
                  <td>
                    <Link
                      to={"/admin/categories/" + category.slug}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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

  return (
    <div>
      {loading && <h1>Loading</h1>}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {advisors.length !== 0 &&
              advisors.map((advisor, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{advisor.name}</td>
                  <td>
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
