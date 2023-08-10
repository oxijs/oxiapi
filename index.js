const axios = require('axios');
const json = {
    translate: async function(from, to, text) {
        let fromParam;
        if (from === null || from === undefined) {
            fromParam = '';
        } else {
            fromParam = from;
        };
        if (!to) {
            throw new Error(`Missing parameter: 'to' is undefined`);
        };
        if (!text) {
            throw new Error(`Missing parameter: 'text' is undefined`);
        };
        try {
            const res = await axios.get(`https://oxiapi.0xtag4.repl.co/json/translate?from=${fromParam}&to=${to}&text=${encodeURIComponent(text)}`);
            return res.data;
        } catch (error) {
            throw new Error(`Unexpected error when trying to reach endpoint: ${error.message}`);
        };
    },
    fact: async function() {
        try {
            const res = await axios.get(`https://oxiapi.0xtag4.repl.co/json/fact`);
            return res.data;
        } catch (error) {
            throw new Error(`Unexpected error when trying to reach endpoint: ${error.message}`);
        };
    },
    calculate: async function(expr) {
        if (!expr) throw new Error(`Missing parameter: 'expr' is undefined`);
        try {
            const res = await axios.get(`https://oxiapi.0xtag4.repl.co/json/calculate?expr=${encodeURIComponent(expr)}`);
            return res.data;
        } catch (error) {
            throw new Error(`Unexpected error when trying to reach endpoint: ${error.message}`);
        };
    },
    npm: async function(packagename) {
        if (!packagename) throw new Error(`Missing parameter: 'packagename' is undefined`);
        try {
            const res = await axios.get(`https://oxiapi.0xtag4.repl.co/json/npm?package=${encodeURIComponent(packagename)}`);
            return res.data
        } catch (error) {
            throw new Error(`Unexpected error when trying to reach endpoint: ${error.message}`)
        };
    },
    formatDate: async function(timestamp, format, uselowcase) {
        if (!timestamp) throw new Error(`Missing parameter: 'timestamp' is undefined`);
        if (!format) throw new Error(`Missing parameter: 'format' is undefined`);
        try {
            const res = await axios.get(`https://oxiapi.0xtag4.repl.co/json/formatdate?timestamp=${timestamp}&format=${encodeURIComponent(format)}&uselowcase=${uselowcase}`);
            return res.data;
        } catch (error) {
            throw new Error(`Unexpected error when trying to reach endpoint: ${error.message}`);
        };
    }
};

module.exports = { json };