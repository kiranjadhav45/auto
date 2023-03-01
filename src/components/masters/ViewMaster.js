import React, { useState } from "react";
import { Form, Button, Checkbox } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/slices/navslice";

function ViewMaster() {
  const [menuMasterChecked, setMenuMasterChecked] = useState(true);
  const [sellUnitChecked, setSellUnitChecked] = useState(true);
  const [invoiceChecked, setInvoiceChecked] = useState(true);
  const [printersChecked, setPrintersChecked] = useState(true);
  const [taxSlabChecked, setTaxSlabChecked] = useState(true);
  const [itemsChecked, setItemsChecked] = useState(true);

  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (value === "menuMaster") setMenuMasterChecked(checked);
    if (value === "sellUnit") setSellUnitChecked(checked);
    if (value === "invoice") setInvoiceChecked(checked);
    if (value === "printers") setPrintersChecked(checked);
    if (value === "TaxSlab") setTaxSlabChecked(checked);
    if (value === "Items") setItemsChecked(checked);
  };

  const masters = [
    { value: "menuMaster" },
    { value: "sellUnit" },
    { value: "invoice" },
    { value: "printers" },
    { value: "TaxSlab" },
    { value: "Items" },
  ];

  const mastersStates = {
    menuMasterChecked,
    sellUnitChecked,
    invoiceChecked,
    printersChecked,
    itemsChecked,
    taxSlabChecked,
  };
  const onSubmit = () => {
    dispatch(setMessage(mastersStates));
  };
  return (
    <div>
      {masters &&
        masters.map((i, index) => {
          return (
            <div key={index}>
              <input
                className="mx-2"
                type="checkbox"
                onChange={handleOnChange}
                value={i.value}
              />
              <label>{i.value}</label>
              <br />
            </div>
          );
        })}

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default ViewMaster;
