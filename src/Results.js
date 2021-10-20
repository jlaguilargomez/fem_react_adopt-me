import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map(
          ({ animal, id, name, breed, images, city, state, description }) => (
            <Pet
              animal={animal}
              key={id}
              name={name}
              breed={breed}
              images={images}
              location={`${city}, ${state}`}
              description={description}
              id={id}
            />

            // It´s easier to make the following simplification but please, do not do this:
            // <Pet {...pet} key={pet.id} />
          )
        )
      )}
    </div>
  );
};

export default Results;
