"use client";

export default function CurrencyInput({ className, amount, ...props }) {
  const formatNumber = (n) =>
    n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formatCurrency = (inputVal, blur) => {
    if (inputVal === "") {
      return "";
    }

    let formattedValue = inputVal;
    if (inputVal.includes(".")) {
      let [leftSide, rightSide] = inputVal.split(".");

      leftSide = formatNumber(leftSide);
      rightSide = formatNumber(rightSide);

      if (blur) {
        rightSide += "00";
      }

      rightSide = rightSide.substring(0, 2);
      formattedValue = `$${leftSide}.${rightSide}`;
    } else {
      formattedValue = `$${formatNumber(inputVal)}`;
      if (blur) {
        formattedValue += ".00";
      }
    }
    amount(
      formattedValue.replace("$", "").replace(",", "").replace(/\.\d+/, "")
    );
    return formattedValue;
  };

  const handleKeyUp = (e) => {
    // setValue(formatCurrency(e.target.value));
    amount(formatCurrency(e.target.value));
  };

  const handleBlur = (e) => {
    // setValue(formatCurrency(value, true));
    amount(formatCurrency(e.target.value, true));
  };

  return (
    <input
      data-type="currency"
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
      // onChange={(e) =>
      //   setValue(e.target.value.replace(/[^0-9.]/g, "").replace(/\.\d+/g, ""))
      // }
      onChange={(e) =>
        amount(e.target.value.replace(/[^0-9.]/g, "").replace(/\.\d+/g, ""))
      }
      className={className}
      {...props}
    />
  );
}
