export interface QueryPropertiesParams {
  data: any;
}

export const PropertiesPanel = {
  name: '查询属性详情',
  service: (params: QueryPropertiesParams) => {
    const { data } = params;
    console.log('custom...', params);
    return new Promise(resolve => {
      return resolve(data);
    });
  },
};