import { Card, CardBody } from "@windmill/react-ui";
import produce from "immer";
import { Delete } from "../Icons/Icons";

const RepsSetsDisplay = ({ currentExerciseData, setCurrentExerciseData }) => {
  const randomNum = Math.floor(Math.random() * 100);
  const randomKey = (num) => (num + randomNum) * randomNum;

  const handleDelete = (index) => {
    const deletedExerciseArray = produce(currentExerciseData, (draft) => {
      draft.sets.splice(index, 1);
    });

    setCurrentExerciseData(deletedExerciseArray);
  };

  return currentExerciseData.sets.map((s, index) => (
    <Card key={randomKey(index)}>
      <div>
        <p className=" text-gray-800 dark:text-gray-300 text-center m-2">
          Set {index + 1}
        </p>
        <div className="flex md:flex-row justify-around py-2 sm:mx-4  bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
          <div className="flex flex-col sm:flex-row justify-between py-2 ml-2">
            <label className=" self-center sm:self-end  ">Weight</label>
            <p className="  sm:text-right font-semibold ">{s.weight} lbs</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2 ml-2">
            <label className="sm:self-end  ">Reps</label>
            <p className=" text-center sm:text-right font-semibold  ">{s.reps}</p>
          </div>
          <div onClick={handleDelete} className="self-center">
            <Delete />
          </div>
        </div>
      </div>
    </Card>
  ));
};

export default RepsSetsDisplay;