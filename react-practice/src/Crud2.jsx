import React, { useState } from "react";

function Crud2() {
  var [input, setInput] = useState("");
  var [list, setList] = useState([]);

  var [viewModal, setViewModal] = useState(false);
  var [viewText, setViewText] = useState("");

  var[edit,setEdit]=useState("")
  var[editText,setEditText]=useState("")

  function addFun(e) {
    e.preventDefault();
    setList(list.concat(input));
    setInput("");
  }

  function getInput(e) {
    setInput(e.target.value);
  }

  function viewFun(value) {
    setViewModal(true);
    setViewText(value);
  }
  function closeFun() {
    setViewModal(false);
  }
  function delFun(index) {
    setList(list.filter((value, i) => i !== index));
  }
  function editFun(index){
    setEdit(index)
    setEditText(list[index])
  }
  function editInput(e){
    setEditText(e.target.value)
  }
  function updateFun(){
    setList(list.map((value,index)=>(edit===index ? editText:value)))
    setEdit("")
  }
  return (
    <>
      <form className="input-group mt-5" onSubmit={addFun}>
        <input
          type="text"
          className="form-control"
          onChange={getInput}
          value={input}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
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
                {edit === index ? <input type="text" value={editText} onChange={editInput}/>:value}
                
               
              </td>
              <td className="d-flex justify-content-between">
                <button onClick={() => viewFun(value)}>button1</button>
                {edit === index ?  <button onClick={updateFun}>update</button>: <button onClick={()=>editFun(index)}>Edit</button>}
              

                <button onClick={() => delFun(index)}>button3</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewModal && (
        <div className="modal fade show d-block modal-backdrop">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your List</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeFun}
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
