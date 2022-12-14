const db = require('../database');

const login = {
    password: function (card_number, callback) {
        return db.query(
            'SELECT pin_code FROM bank_card WHERE card_numer = ? ',
            [card_number], callback);
        
    },
    false_count: function (card_number, callback) {
        return db.query(
            'SELECT false_count FROM bank_card WHERE card_numer = ? ',
            [card_number], callback);
    },
    false_count_add: function (card_number, false_countti, callback) {
        return db.query(
            'UPDATE bank_card SET false_count = ? WHERE card_numer = ? ',
            [false_countti, card_number], callback)
    },
    locked: function  (card_number, callback) {
        return db.query(
            'UPDATE bank_card SET locked = 1 WHERE card_numer = ? ',
            [card_number], callback)
    },
    locked_status: function  (card_number, callback) {
        return db.query(
            'SELECT locked FROM bank_card WHERE card_numer = ? ',
            [card_number], callback)
    },
    locked_clear: function  (card_number, callback) {
        return db.query(
            'UPDATE bank_card SET false_count = 0 WHERE card_numer = ? ',
            [card_number], callback)
        },
    card_id: function  (card_number, callback) {
        return db.query(
            'SELECT card_id FROM bank_card WHERE card_numer=?',
            [card_number], callback)
            },
    creditOrDebit: function  (card_id, callback) {
        return db.query(
            'SELECT debit_credit, id_account FROM bank_account WHERE id_account=?',
            [card_id], callback)
            }

};

module.exports = login;