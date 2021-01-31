import React from 'react'

const FilterDemonstration = () => {

    let nums = []

    for(let i=0;i<10;i++){
        nums.push(i);
    }

    return (
        <div>
            {
                nums = nums.filter((obj) => {
                    return obj%2==0
                }),

                nums.map((obj,index) => {
                    return <h3 key={index}>{obj}</h3>
                })

            }

            <Summary></Summary>

        </div>
    )
}

function Summary(){
    return <h3>So what happened here? We had a list from 0 to 9, but we used filter to take out the odd numbers and now the list only shows even numbers.</h3>
}

export default FilterDemonstration
