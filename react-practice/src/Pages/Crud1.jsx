import React, { useState } from "react";

function Crud1() {
  var [input, setInput] = useState("");
  var [list, setList] = useState([]);
  var [view, setView] = useState(false);
  var [viewData, setViewData] = useState("");
  var [edit, setEdit] = useState("");
  var [editText, setEditText] = useState("");

  function getInput(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function FormSub(e) {
    e.preventDefault();
    setList(list.concat(input));
    setInput("");
  }

  function viewModal(value) {
    setView(true);
    setViewData(value);
  }
  function closeModal() {
    setView(false);
  }

  function deleteFun(index) {
    setList(list.filter((v, i) => i !== index));
  }

  function editFun(index) {
    setEdit(index);
    setEditText(list[index]);
  }
  function editTextFun(e) {
    setEditText(e.target.value);
  }
  
  function updateData() {
    setList(list.map((value, index) => (edit === index ? editText : value)));
    setEdit("");
  }

  return (
    <>
      <form action="" className="input-group p-5" onSubmit={FormSub}>
        <input
          type="text"
          className="form-control"
          onChange={getInput}
          value={input}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
      {list.length == 0 ? (
        "empty list"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>List</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((value, index) => (
              <tr key={index}>
                <td>
                  {edit === index ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={editTextFun}
                    />
                  ) : (
                    value
                  )}
                </td>
                <td className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => viewModal(value)}
                  >
                    View
                  </button>
                  {edit !== index ? (
                    <button
                      className="btn btn-warning"
                      onClick={() => editFun(index)}
                    >
                      Edit
                    </button>
                  ) : (
                    <button className="btn btn-warning" onClick={updateData}>
                      update
                    </button>
                  )}
                  <button
                    className="btn btn-danger"
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

      {/* view  modal  */}
      {view && (
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
                <h5>{viewData}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Crud1;
