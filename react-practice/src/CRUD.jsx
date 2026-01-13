import React, { useState } from "react";

const CRUD = () => {
  var [input, setInput] = useState("");
  var [list, setList] = useState([]);

  var [viewModal, setViewModal] = useState(false);
  var [viewText, setViewText] = useState("");

  var [edit, setEdit] = useState("");
  var [editText, setEditText] = useState("");

  const inputFun = (e) => {
    setInput(e.target.value);
  };

  const addFun = (e) => {
    e.preventDefault();
    setList(list.concat(input));
    setInput("");
  };

  const viewFun = (value) => {
    setViewModal(true);
    setViewText(value);
  };

  const closeModal = () => {
    setViewModal(false);
  };

  const deleteFun = (index) => {
    setList(list.filter((value, i) => i !== index));
  };

  const editFun = (index) => {
    setEdit(index);
    setEditText(list[index]);
  };

  const editInputFun = (e) => {
    setEditText(e.target.value);
  };

  const updateFun = () => {
    setList(list.map((value, index) => (edit === index ? editText : value)));
    setEdit("");
  };

  return (
    <>
      <div className="container my-5">
        <form className="input-group" onSubmit={addFun}>
          <input
            type="text"
            className="form-control"
            onChange={inputFun}
            value={input}
          />
          <input type="submit" className="btn btn-primary" />
        </form>

        {list.length === 0 ? (
          <p className="text-danger text-center my-5">No List Found</p>
        ) : (
          <table className="table border-primary table-bordered text-center my-5">
            <thead>
              <tr>
                <td>List</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {list.map((value, index) => (
                <tr>
                  <td>
                    {edit === index ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editText}
                        onChange={editInputFun}
                      />
                    ) : (
                      value
                    )}
                  </td>
                  <td className="d-flex gap-5">
                    <button
                      className="flex-grow-1 btn btn-primary"
                      onClick={() => viewFun(value)}
                    >
                      View
                    </button>

                    {edit === index ? (
                      <button
                        className="flex-grow-1 btn btn-warning"
                        onClick={updateFun}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="flex-grow-1 btn btn-warning"
                        onClick={() => editFun(index)}
                      >
                        Edit
                      </button>
                    )}

                    <button
                      className="flex-grow-1 btn btn-danger"
                      onClick={() => deleteFun(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {viewModal && (
          <div className="modal fade show d-block modal-backdrop" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Your List</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <h5>{viewText}</h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CRUD;
