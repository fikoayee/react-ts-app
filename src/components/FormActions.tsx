import classes from "../styles/PostForm.module.css"

const FormActions = () => {
  return (
    <>
      <div className={classes.actions}>
        <button type="reset">Clear</button>
        <button>Save</button>
      </div>
    </>
  );
};
export default FormActions;
