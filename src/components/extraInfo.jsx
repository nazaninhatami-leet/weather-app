const Extra = (data) => {
  const { id, label, code, unit } = data;
  console.log(code);
  return (
    <li className="item humidity" key={id}>
      <span>{label}:</span>
      {code !== undefined ? (
        <span>
          {code}
          {unit}
        </span>
      ) : (
        '......'
      )}
    </li>
  );
};
export default Extra;
