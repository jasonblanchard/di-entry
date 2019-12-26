'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('entries', {
    id: {
      type: 'int',
      'primaryKey': true,
      'autoIncrement': true
    },
    text: 'string',
    creator_id: {
      type: 'string',
    }
  })
    .then(() => {
      return db.addIndex('entries', 'id_creator_id', ['id', 'creator_id']);
    });
};

exports.down = function(db) {
  return db.dropTable('entries');
};

exports._meta = {
  "version": 1
};
