import React, { useState } from "react";

function Crud2() {
  var [input, setInput] = useState("");
  var [list, setList] = useState([]);

  var [viewModal, setViewModal] = useState(false);
  var [viewText, setViewText] = useState("");

  var [edit, setEdit] = useState("");
  var [editText, setEditText] = useState("");
  function Subfun(e) {
    e.preventDefault();
    setList(list.concat(input));
    setInput("");
  }
  function getData(e) {
    setInput(e.target.value);
  }
  function viewFun(value) {
    setViewModal(true);
    setViewText(value);
    //  alert(value)
  }
  function CloseModal() {
    setViewModal(false);
  }
  function DelFun(index) {
    setList(list.filter((value, i) => i !== index));
  }
  // function EditFun(index) {
  //   setEdit(index);
  //   setEditText(list[index]);
  // }
  // function editTextFun(e) {
  //   setEditText(e.target.value);
  // }
  // function updateFun() {
  //   setList(list.map((value, index) => (edit === index ? editText : value)));
  //   setEdit("");
  // }

  function updateFun(){
    setList(list.map((value,index)=>(edit==index ? editText:value)))
    setEdit("")
  }
  function editTextFun(e){
    
    setEditText(e.target.value)
  }
  function editFun(index) {
    setEdit(index);
    setEditText(list[index])

  }
  return (
    <>
      <form action="" className="input-group mt-5" onSubmit={Subfun}>
        <input
          type="text"
          className="form-control"
          onChange={getData}
          value={input}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>

      {list.length === 0 ? (
        <h1>NO Data Found</h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>List</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((value, index) => (
              <tr key={index}>
                <td>
                  {/* {edit === index ? (
                    <input
                      type="text"
                      onChange={editTextFun}
                      value={editText}
                    />
                  ) : (
                    value
                  )} */}

                  {edit === index ? (<input type="text" onChange={editTextFun} value={editText}/>): value}
                  
                </td>
                <td className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => viewFun(value)}
                  >
                    View
                  </button>
                  {edit === index ? (
                    <button className="btn btn-danger" onClick={updateFun}>update</button>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={() => editFun(index)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="btn btn-danger"
                    onClick={() => DelFun(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* view Modal */}
      {viewModal && (
        <div className="modal fade show d-block modal-backdrop" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your List</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={CloseModal}
                ></button>
              </div>

              <div className="modal-body">
                <h5>{viewText}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Crud2;
