import axios from "axios";

export const GET_DATA_LIST = "GET_DATA_LIST";
export const GET_DATA_DETAIL = "GET_DATA_DETAIL";
export const POST_DATA_CREATE = "POST_DATA_CREATE";
export const PUT_DATA_UPDATE = "PUT_DATA_UPDATE";

export const getDataList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/burtonrichard/dbjson/data"
      )
      .then(function (response) {
        dispatch({
          type: GET_DATA_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_DATA_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDataDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/burtonrichard/dbjson/data/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_DATA_DETAIL,
          payload: {
            message: false,
            data: response.data,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_DATA_DETAIL,
          payload: {
            message: error.message,
            data: false,
          },
        });
      });
  };
};

export const postDataAdd = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/burtonrichard/dbjson/data",
        data
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_DATA_CREATE,
          payload: {
            message: false,
            data: response.data,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_DATA_CREATE,
          payload: {
            message: error.message,
            data: false,
          },
        });
      });
  };
};

export const putDataUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "https://my-json-server.typicode.com/burtonrichard/dbjson/data/"+id,
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_DATA_UPDATE,
          payload: {
            message: false,
            data: response.data,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_DATA_UPDATE,
          payload: {
            message: error.message,
            data: false,
          },
        });
      });
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://my-json-server.typicode.com/burtonrichard/dbjson/data/"+id,
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_DETAIL,
      payload: {
        message: false,
        data: false,
      },
    });

    dispatch({
      type: POST_DATA_CREATE,
      payload: {
        message: false,
        data: false,
      },
    });
  };
};
