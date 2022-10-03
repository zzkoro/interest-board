import axios, { AxiosPromise, AxiosResponse } from "axios";

const api = {
  // company: "http://finlife.fss.or.kr/finlifeapi/companySearch.json",
  company: "/finlifeapi/companySearch.json",
};

const axiosInstance = axios.create({
  timeout: 3000,
});

async function fetchCompanyList() {
  const auth = "2c76102c174dcaa9bed3eed482da0303";
  // const url = `${api.company}?auth=${auth}&topFinGrpNo=020000&pageNo=1`;
  const url = `${api.company}?auth=${auth}&topFinGrpNo=0A0000&pageNo=1`;

  try {
    const { data } = await axiosInstance.get(url);

    console.log(data);

    // 응답이 오류인 경우
    if (data.result.err_cd !== "000") {
      throw new Error(`response error: ${data.result.err_cd}`);
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(`fetchCompanyList error: ${e.message}`);
    } else {
      console.log("fetchCompanyList error: " + e);
    }
  }
}

export { fetchCompanyList };
