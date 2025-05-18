import { useState, useEffect } from "react";
import "./../assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../assets/css/cnterestcalculation.css";

export default function InterestCalculator() {
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("13");
  const [calculationType, setCalculationType] = useState("វិនិយោគផ្ទាល់");
  const [currencyType, setCurrencyType] = useState("ដុល្លារ ($)");
  const [estimatedReturn, setEstimatedReturn] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [minAmount, setMinAmount] = useState(100);
  const [maxAmount, setMaxAmount] = useState(5000);
  const [amountLabel, setAmountLabel] = useState("ចំនួនទឹកប្រាក់ (100 $ - 5,000 $)");
  
  // Error states
  const [errors, setErrors] = useState({
    amount: "",
    general: ""
  });

  useEffect(() => {
    calculateEstimatedReturn();
  }, [amount, period, calculationType, currencyType]);

  useEffect(() => {
    if (currencyType === "ដុល្លារ ($)") {
      setCurrencySymbol("$");
      setMinAmount(100);
      setMaxAmount(5000);
      setAmountLabel("ចំនួនទឹកប្រាក់ (100 $ - 5,000 $)");
    } else if (currencyType === "រៀល (៛)") {
      setCurrencySymbol("៛");
      setMinAmount(100000);
      setMaxAmount(5000000);
      setAmountLabel("ចំនួនទឹកប្រាក់ (100000 ៛ - 5,000000 ៛)");
    }
    
    setAmount("");
    setShowResults(false);
    setErrors({...errors, amount: ""}); 
  }, [currencyType]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {...errors};
    
    if (!amount) {
      newErrors.amount = "សូមបញ្ចូលចំនួនទឹកប្រាក់";
      isValid = false;
    } else if (isNaN(amount)) {
      newErrors.amount = "ចំនួនទឹកប្រាគត្រូវតែជាលេខ";
      isValid = false;
    } else if (parseFloat(amount) < minAmount) {
      newErrors.amount = `ចំនួនទឹកប្រាក់តិចបំផុតគឺ ${minAmount} ${currencySymbol}`;
      isValid = false;
    } else if (parseFloat(amount) > maxAmount) {
      newErrors.amount = `ចំនួនទឹកប្រាក់ច្រើនបំផុតគឺ ${maxAmount} ${currencySymbol}`;
      isValid = false;
    } else {
      newErrors.amount = "";
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const calculateEstimatedReturn = () => {
    if (!validateForm()) {
      setShowResults(false);
      return;
    }

    const principal = parseFloat(amount);
    const time = parseInt(period, 10);
    let rate = 0.08; 

    const total = principal + (principal * rate * time) / 12;
    setEstimatedReturn(total.toFixed(2));
    setShowResults(true);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    
    if (value && errors.amount) {
      setErrors({...errors, amount: ""});
    }
  };

  const handleCurrencyChange = (e) => {
    setCurrencyType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEstimatedReturn();
  };

  return (
    <div className="container interest-calculator-container ">
      <div className="card animated-card rounded-lg bg-white p-4">
        <h2 className="text-center mb-4 fw-bold text-gray-800 activity-words">
          គណនាទុនវិនិយោគ
        </h2>
        {errors.general && (
          <div className="alert alert-danger mb-3">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row mb-1">
            <div className="col-md-6 mb-3">
              <label className="text-sm text-gray-600 mb-1">
                ប្រភេទនៃការវិនិយោគ
              </label>
              <select
                className="form-select w-full p-2 border rounded custom-green-select custom-dropdown"
                value={calculationType}
                onChange={(e) => setCalculationType(e.target.value)}
              >
                <option value="វិនិយោគផ្ទាល់" className="custom-option">វិនិយោគផ្ទាល់</option>
                <option value="វិនិយោគក្រុម" className="custom-option">វិនិយោគក្រុម</option>
                <option value="វិនិយោគសហគ្រាស" className="custom-option">វិនិយោគសហគ្រាស</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="text-sm text-gray-600 mb-1">រូបិយប័ណ្ណ</label>
              <select
                className="form-select w-full p-2 border rounded custom-green-select custom-dropdown"
                value={currencyType}
                onChange={handleCurrencyChange}
              >
                <option value="ដុល្លារ ($)" className="custom-option">ដុល្លារ ($)</option>
                <option value="រៀល (៛)" className="custom-option">រៀល (៛)</option>
              </select>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-md-12 mb-3">
              <label className="text-sm text-gray-600 mb-1">
                {amountLabel}
              </label>
              <input
                type="number"
                className={`form-control w-full p-2 border rounded bg-gray-50 custom-green-select ${
                  errors.amount ? "is-invalid" : ""
                }`}
                value={amount}
                onChange={handleAmountChange}
                placeholder={`សូមបញ្ចូលចំនួនទឹកប្រាក់ `}
                min={minAmount}
                max={maxAmount}
              />
              {errors.amount && (
                <div className="invalid-feedback d-block text-danger">
                  {errors.amount}
                </div>
              )}
            </div>
          </div>
          
          <div className="row mb-1">
            <div className="col-md-12 mb-3">
              <label className="text-sm text-gray-600 mb-1">រយៈពេល?</label>
              <select
                className="form-select w-full p-2 border rounded custom-green-select custom-dropdown"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="13" className="custom-option">13 ខែ</option>
                <option value="30" className="custom-option">30 ខែ</option>
                <option value="60" className="custom-option">60 ខែ</option>
                <option value="90" className="custom-option">90 ខែ</option>
              </select>
            </div>
          </div>

          {showResults && (
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-1">
                ប្រាក់វិនិយោគទទួលបាន (ប៉ាន់ស្មាន)
              </label>
              <div className="input-group">
                <input
                  type="number"
                  readOnly
                  className="form-control w-full p-2 border rounded bg-gray-50 custom-green-select"
                  value={estimatedReturn}
                  placeholder="0.00"
                />
                <span className="input-group-text">{currencySymbol}</span>
              </div>
            </div>
          )}
        </form>
        <button
          type="submit"
          className="btn py-2 rounded-lg text-bg-primary text-white w-full"
          onClick={handleSubmit}
        >
          ចុះឈ្មោះ
        </button>
      </div>
    </div>
  );
}