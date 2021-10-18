// const Pet = ({ name, age, size }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, name),
//     React.createElement("h3", {}, age),
//     React.createElement("h3", {}, size),
//   ]);
// };

const Pet = ({ name, age, size }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{size}</h4>
    </div>
  );
};

export default Pet;
