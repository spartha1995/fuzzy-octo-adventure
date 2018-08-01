
import { Employee } from '../Model/employee-model';

/**
 * 
 */
export let MigratedDatabase = () => {
    Employee.sync();
}

/**
 * 
 * @param model 
 */
export let GetAll = (model: any) => {
    return model.findAll();
}

/**
 * 
 * @param model 
 * @param id 
 */
export let GetById = (model: any, id: number) => {
    return model.find({
        where: {
            id: id
        }
    });
}

/**
 * 
 * @param model 
 * @param data 
 */
export let AddData = (model: any, data: any) => {
    return model.create(data);
}

/**
 * 
 * @param model 
 * @param data 
 * @param query 
 */
export let UpdateData = (model: any, data: any, query: any) => {
    return model.update(data, {
        where: query
    });
}

/**
 * 
 * @param model 
 * @param query 
 */
export let RemoveData = (model: any, query: any) => {
    return model.destroy({
        where: query
    });
}