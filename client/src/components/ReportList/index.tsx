import Loader from "../Loader";
interface ReportListProps {
  items: any;
  keys: any;
}
const ReportList = ({ items, keys }: ReportListProps) => {
  if (!items || items === 500) {
    return <Loader />;
  }
  if (items.length === 0) {
    return <div className="py-4">No Items found!</div>;
  }

  const renderListKeys = keys.map((key: string, index: number) => {
    return (
      <h3 className="capitalize text-lg" key={key}>
        {key}
      </h3>
    );
  });
  const renderListItems = items.map((item: any, index: number) => {
    return (
      <div
        className={`grid grid-cols-${keys.length + 1} text-left border-b py-2`}
        key={index}
      >
        <p className="id">{index + 1}</p>
        {
          //Loop through keys and check if the key is set to be displayed
          Object.keys(item).map(itemKey => {
            if (keys.includes(itemKey) === false) {
              return null;
            }
            return <p>{item[itemKey]}</p>;
          })
        }
      </div>
    );
  });
  return (
    <div className="report-list">
      <div
        className={`grid grid-cols-${keys.length + 1} text-left border-b py-2`}
      >
        <h3 className="capitalize text-lg">Id</h3>
        {renderListKeys}
      </div>
      {renderListItems}
    </div>
  );
};

export default ReportList;
