interface CardProps {
  header: any;
  body: any;
}
const Card = ({ header, body }: CardProps) => {
  const renderHeader = () => {
    if (!header) {
      return null;
    }
    return (
      <div className="card-header p-2 px-4 font-semibold border-b text-xl">
        {header}
      </div>
    );
  };
  return (
    <div className="card rounded border shadow w-full mb-4">
      {renderHeader()}
      <div className="card-body px-4">{body}</div>
    </div>
  );
};
export default Card;
