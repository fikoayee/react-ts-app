interface Props {
  header: string;
  id: string;
  type: string;
  isRequired: boolean;
  obj: any;
  objProp: any;
  minLength?: number;
  maxLength?: number;
}

const FormItem: React.FC<Props> = ({
  header,
  id,
  type,
  isRequired,
  obj,
  objProp,
  minLength,
  maxLength,
}) => {
    const defaultMinLength = 0
    const actualMinLength = minLength !== undefined ? minLength : defaultMinLength
    const defaultMaxLength = 200
    const actualMaxLength = maxLength !== undefined ? maxLength : defaultMaxLength
  return (
    <>
      <p>
        <label htmlFor={id}>{header}</label>
        <input
          id={id}
          type={type}
          name={id}
          required={isRequired}
          defaultValue={obj ? objProp : ""}
          minLength={actualMinLength}
          maxLength={actualMaxLength}
        />
      </p>
    </>
  );
};
export default FormItem;
