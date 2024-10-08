.open uzbek.duckdb -- Create user table

DROP TABLE users;
DROP SEQUENCE id_users_sequence;
CREATE SEQUENCE id_users_sequence START 1;

CREATE TABLE users (
    id INTEGER DEFAULT nextval('id_users_sequence'),
    uuid UUID DEFAULT uuid(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    institution_code VARCHAR NULL,
    institution_name VARCHAR NULL,
    name VARCHAR NULL,
    patronymics VARCHAR NULL,
    surname VARCHAR NULL,
    job_title VARCHAR NULL,
    profession VARCHAR NULL,
    phone VARCHAR NULL,
    email VARCHAR NULL,
    region_code VARCHAR NULL,
    role_code VARCHAR NULL,
    service_type_code VARCHAR NULL,
    status BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

INSTALL spatial;
LOAD spatial;
INSERT INTO users
SELECT * FROM st_read('utilizatori.xlsx', layer = 'utilizatori', open_options = ['HEADERS=FORCE']);


-- Create institutions table

DROP TABLE institutions;
DROP SEQUENCE id_institution_sequence;
CREATE SEQUENCE id_institution_sequence START 1;
CREATE TABLE institutions (
    id INTEGER DEFAULT nextval('id_institution_sequence'),
    uuid UUID DEFAULT uuid(),
    code VARCHAR NOT NULL,
    name_en VARCHAR NOT NULL,
    name_uz VARCHAR NOT NULL,
    name_ru VARCHAR NOT NULL,
    type VARCHAR,
    shorttype VARCHAR,
    address VARCHAR NOT NULL,
    region VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    settlement VARCHAR,
    settlement_type INTEGER NOT NULL,
    capacity INTEGER,
    children INTEGER,
    leavers INTEGER,
    employees INTEGER,
    inson INTEGER,
    changed BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSTALL spatial;
LOAD spatial;
INSERT INTO institutions
SELECT * FROM st_read('Services.xlsx', layer = 'Sheet1', open_options = ['HEADERS=FORCE']);

SELECT nextval('id_institution_sequence') AS nextval;

ALTER TABLE institutions ADD COLUMN changed BOOLEAN DEFAULT FALSE;

-- Create INSON table
INSTALL spatial;
LOAD spatial;

DROP TABLE inson;
DROP SEQUENCE id_inson_sequence;

CREATE SEQUENCE id_inson_sequence START 1;
CREATE TABLE inson (
    id INTEGER DEFAULT nextval('id_inson_sequence'),
    uuid UUID DEFAULT uuid(),
    code VARCHAR NOT NULL,
    name_en VARCHAR NOT NULL,
    name_uz VARCHAR NOT NULL,
    name_ru VARCHAR NOT NULL,
    region VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    pf INTEGER NOT NULL,
    fth INTEGER NOT NULL,
    children_fth INTEGER NOT NULL,
    leavers_fth INTEGER NOT NULL,
    services VARCHAR,
    changed BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO inson
SELECT * FROM st_read('INSON.xlsx', layer = 'Sheet1', open_options = ['HEADERS=FORCE']);

// fix services
UPDATE inson SET services = replace(services, '.', ',');
ALTER TABLE inson ADD COLUMN changed BOOLEAN DEFAULT FALSE;

-- Create instrument 1
DROP TABLE instrument_cpis;
DROP SEQUENCE id_instrument_cpis_sequence;
CREATE SEQUENCE id_instrument_cpis_sequence START 1;

CREATE TABLE instrument_cpis (
    id INTEGER DEFAULT nextval('id_instrument_cpis_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    service_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_cpis;
CREATE TABLE values_cpis (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 2
DROP TABLE instrument_cibs;
DROP SEQUENCE id_instrument_cibs_sequence;
CREATE SEQUENCE id_instrument_cibs_sequence START 1;

CREATE TABLE instrument_cibs (
    id INTEGER DEFAULT nextval('id_instrument_cibs_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_cibs;
CREATE TABLE values_cibs (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);


-- Create instrument 3
DROP TABLE instrument_csr;
DROP SEQUENCE id_instrument_csr_sequence;
CREATE SEQUENCE id_instrument_csr_sequence START 1;

CREATE TABLE instrument_csr (
    id INTEGER DEFAULT nextval('id_instrument_csr_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_csr;
CREATE TABLE values_csr (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 4
DROP TABLE instrument_qmr;
DROP SEQUENCE id_instrument_qmr_sequence;
CREATE SEQUENCE id_instrument_qmr_sequence START 1;

CREATE TABLE instrument_qmr (
    id INTEGER DEFAULT nextval('id_instrument_qmr_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_qmr;
CREATE TABLE values_qmr (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 5a
DROP TABLE instrument_tqyp;
DROP SEQUENCE id_instrument_tqyp_sequence;
CREATE SEQUENCE id_instrument_tqyp_sequence START 1;

CREATE TABLE instrument_tqyp (
    id INTEGER DEFAULT nextval('id_instrument_tqyp_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_tqyp;
CREATE TABLE values_tqyp (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 5
DROP TABLE instrument_yplcs;
DROP SEQUENCE id_instrument_yplcs_sequence;
CREATE SEQUENCE id_instrument_yplcs_sequence START 1;

CREATE TABLE instrument_yplcs (
    id INTEGER DEFAULT nextval('id_instrument_yplcs_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_yplcs;
CREATE TABLE values_yplcs (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);


-- Create instrument 6
DROP TABLE instrument_dsee;
DROP SEQUENCE id_instrument_dsee_sequence;
CREATE SEQUENCE id_instrument_dsee_sequence START 1;

CREATE TABLE instrument_dsee (
    id INTEGER DEFAULT nextval('id_instrument_dsee_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_dsee;
CREATE TABLE values_dsee (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 7
DROP TABLE instrument_ftch;
DROP SEQUENCE id_instrument_ftch_sequence;
CREATE SEQUENCE id_instrument_ftch_sequence START 1;

CREATE TABLE instrument_ftch (
    id INTEGER DEFAULT nextval('id_instrument_ftch_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    service_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_ftch;
CREATE TABLE values_ftch (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 8
DROP TABLE instrument_pfq;
DROP SEQUENCE id_instrument_pfq_sequence;
CREATE SEQUENCE id_instrument_pfq_sequence START 1;

CREATE TABLE instrument_pfq (
    id INTEGER DEFAULT nextval('id_instrument_pfq_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_pfq;
CREATE TABLE values_pfq (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 9
DROP TABLE instrument_eef;
DROP SEQUENCE id_instrument_eef_sequence;
CREATE SEQUENCE id_instrument_eef_sequence START 1;

CREATE TABLE instrument_eef (
    id INTEGER DEFAULT nextval('id_instrument_eef_sequence'),
    uuid UUID DEFAULT uuid(),
    user_uuid VARCHAR,
    region_code VARCHAR,
    institution_type VARCHAR,
    institution_code VARCHAR,
    status VARCHAR DEFAULT 'partial',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

DROP TABLE values_eef;
CREATE TABLE values_eef (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

DROP TABLE auth_codes;
CREATE TABLE auth_codes (
    institution_code VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    used BOOLEAN DEFAULT FALSE,
);

INSTALL spatial;
LOAD spatial;
INSERT INTO auth_codes
SELECT * FROM st_read('authentication_codes.xlsx', layer = 'auth_codes', open_options = ['HEADERS=FORCE']);


DROP TABLE fth_codes;
CREATE TABLE fth_codes (
    region VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    uuid UUID,
    used BOOLEAN DEFAULT FALSE,
);
INSTALL spatial;
LOAD spatial;
INSERT INTO fth_codes
SELECT * FROM st_read('fth_codes.xlsx', layer = 'fth_codes', open_options = ['HEADERS=FORCE']);


UPDATE instrument_cpis SET status = 'completed';
UPDATE instrument_cibs SET status = 'completed';
UPDATE instrument_csr SET status = 'completed';
UPDATE instrument_qmr SET status = 'completed';
UPDATE instrument_tqyp SET status = 'completed';
UPDATE instrument_yplcs SET status = 'completed';
UPDATE instrument_dsee SET status = 'completed';
UPDATE instrument_ftch SET status = 'completed';
UPDATE instrument_pfq SET status = 'completed';
UPDATE instrument_eef SET status = 'completed';

-- clear all instruments data
DELETE FROM instrument_cpis;
DELETE FROM values_cpis;
DELETE FROM instrument_cibs;
DELETE FROM values_cibs;
DELETE FROM instrument_csr;
DELETE FROM values_csr;
DELETE FROM instrument_qmr;
DELETE FROM values_qmr;
DELETE FROM instrument_tqyp;
DELETE FROM values_tqyp;
DELETE FROM instrument_yplcs;
DELETE FROM values_yplcs;
DELETE FROM instrument_dsee;
DELETE FROM values_dsee;
DELETE FROM instrument_ftch;
DELETE FROM values_ftch;
DELETE FROM instrument_pfq;
DELETE FROM values_pfq;
DELETE FROM instrument_eef;
DELETE FROM values_eef;

UPDATE fth_codes SET used = FALSE;
UPDATE auth_codes SET used = FALSE;