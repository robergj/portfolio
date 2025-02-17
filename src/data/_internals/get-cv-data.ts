import type { ReadonlyDeep } from 'type-fest';
import type { Data } from '@/types/data';
import transformData from './transform-data';
import configData from '../config_esp';
import sectionsData from '../sections/index_esp';

const data = { config: configData, sections: sectionsData } as const satisfies ReadonlyDeep<Data>;

export type PreciseData = typeof data;

const getCvData = transformData(data);

export default getCvData;
