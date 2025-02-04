
export const RatingCard=({rating})=>{

    return (
        <div className="flex items-center my-2">
            {rating &&
            (() => {
              const filledArr = [];
              for (let j = 0; j < 5; j++) {
                if (j < rating) {
                  filledArr[j] = (
                    <i
                      key={j}
                      className="text-lg bi bi-star-fill text-yellow-500 mr-1"
                    ></i>
                  );
                } else {
                  filledArr[j] = (
                    <i
                      key={j}
                      className="text-lg bi bi-star text-yellow-500 mr-1"
                    ></i>
                  );
                }
              }
              return filledArr;
            })()}
        </div>
    )
}