import axios, { AxiosPromise, AxiosResponse } from "axios";

const api = {
  company:
    "https://cors-anywhere.herokuapp.com http://finlife.fss.or.kr/finlifeapi/companySearch.json",
};

const axiosInstance = axios.create({
  timeout: 3000,
});

async function fetchCompanyList() {
  const auth = "2c76102c174dcaa9bed3eed482da0303";

  const url = `${api.company}?auth=${auth}&topFinGrpNo=020000&pageNo=1`;

  const aaa = await axiosInstance.get(url);

  console.log(aaa);
}

export { fetchCompanyList };
