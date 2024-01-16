interface Props {
  statusInfo: string;
}
const DataStatus: React.FC<Props> = ({ statusInfo }) => {
  return (
    <>
      <h1>{statusInfo}</h1>
    </>
  );
};
export default DataStatus;
