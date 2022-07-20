'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface RepositoryAttributes {
  id: string;
  url: string;
  name: string;
  author: string;
  topics: string[];
  stars: number;
  forks: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Repository extends Model<RepositoryAttributes> 
  implements RepositoryAttributes {
    id!: string;
    url!: string;
    name!: string;
    author!: string;
    topics!: string[];
    stars!: number;
    forks!: number;
  };
  Repository.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topics: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    stars: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    forks: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Repository',
  });
  return Repository;
};