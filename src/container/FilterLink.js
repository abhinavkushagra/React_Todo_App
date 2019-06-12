import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibilityFilter } from "../actions/index";

const mapStateToProps = (state, ownProps) => {
  return {
    action: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
