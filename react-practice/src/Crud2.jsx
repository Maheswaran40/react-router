import React, { useState } from "react";

function Crud2() {


 var url="http://localhost:3000"

  var [input, setInput] = useState("");
  var [list, setList] = useState([]);

  var [modal, setModal] = useState(false);
  var [viewText, setViewText] = useState("");
  var [edit, setEdit] = useState("");
  var [updateInput, setUpdateInput] = useState("");
  console.log(edit);

  function formSub(e) {
    e.preventDefault();
    console.log(e);
    setList(list.concat(input));
    setInput("");
  }


  async function dbData(){
    
  }

  function inputData(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function showModal(value) {
    setModal(true);
    setViewText(value);
  }
  function closeModal() {
    setModal(false);
  }
  function deleteFun(data) {
    setList(list.filter((v, i) => v !== data));
  }
  function editFun(index) {
    setEdit(index);
    setUpdateInput(list[index])
  }
  function updateFun(e) {
    setUpdateInput(e.target.value);
  }
  function FunUpdate(){
     setList(list.map((value, index) => (edit === index ? updateInput : value)));
    setEdit("");
  }
  return (
    <div>
      <form action="" className="p-5 input-group" onSubmit={formSub}>
        <input
          type="text"
          className="form-control"
          onChange={inputData}
          value={input}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
      {list.length == 0
        ? "no list found"
        : list.map((value, index) => (
            <table className="table border-primary table-bordered text-center my-5">
              <thead>
                <tr>
                  <th>list</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr key={index}>
                  <td>
                    {edit === index ? (
                      <input
                        type="text"
                        value={updateInput}
                        onChange={updateFun}
                      />
                    ) : (
                      value
                    )}
                  </td>
                  <td className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => showModal(value)}
                    >
                      view
                    </button>
                    {edit === index ? (
                      <button className="btn btn-warning" onClick={FunUpdate}>Update</button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => editFun(index)}
                      >
                        Edit
                      </button>
                    )}

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteFun(value)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}

      {modal && (
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
  );
}

export default Crud2;
