const Checkbox = ({ label }) => {
  return (
    <div className="checkbox">
      <div class="sb-checkbox">
        <input
          type="checkbox"
          class="sb-checkbox__input"
          id="check1"
          name="check1"
        />
        <label
          class="sb-checkbox__label sb-checkbox__label--purple"
          for="check1"
        ></label>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
