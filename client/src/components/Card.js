export default function Card({title, onClick, children}) {
  return (
    <div className="card mt-3" onClick={onClick}>
      <div className="card-body d-flex justify-content-between">
        <div>{title}</div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};