const Extra = (data) => {
  let { id, label, code, unit } = data;
  console.log(code);
  if (unit === 'm' && code >= 1000) {
    code = code / 1000;
    unit = 'km';
  }

  return (
    <li className="item" key={id}>
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
