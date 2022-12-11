const GET_ID = (function () {
    function* GenerateIDs(start = 1) {
        let count = start;

        while (true) {
            yield count++;
        }
    }

    function insertIDIntoData(dataArr = []) {
        const counter = GenerateIDs();

        dataArr.forEach((card) => {
            card.id = counter.next().value;
        });
    }

    return {
        insertID: insertIDIntoData
    }
})();


export default GET_ID.insertID;