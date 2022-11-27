import * as _ from 'lodash';
import axios, { AxiosResponse } from 'axios';
import countryInfo from '../tools/downloaded/countryInfo.json';
import { format, utcToZonedTime } from 'date-fns-tz';
import { subDays } from 'date-fns';
import { FinCompanyBase } from './types/api-types';

async function generateFinCompanyBase() {
  const apiClient = axios.create({
    baseURL: process.env.INTEREST_BOARD_API_BASE_URL || 'http://localhost:8080',
  });

  const response: AxiosResponse<FinCompanyBase[]> = await apiClient.get(
    'fss/company',
  );

  const now = new Date();
  const timeZone = 'Asia/Seoul';
  const today = format(utcToZonedTime(now, timeZone), 'yyyy-MM-dd');
  const yesterday = format(
    utcToZonedTime(subDays(now, 1), timeZone),
    'yyyy-MM-dd',
  );

  return response.data;
}

export async function getDataSource() {
  const countryByCc = _.keyBy(countryInfo, 'cc');
  const finCompanyBase = await generateFinCompanyBase();

  return {
    countryByCc,
    finCompanyBase,
  };
}
