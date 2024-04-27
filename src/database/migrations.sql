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
    PRIMARY KEY (id)
);

-- Create institutions table

DROP TABLE institutions;
DROP SEQUENCE id_institution_sequence;

CREATE SEQUENCE id_institution_sequence START 1;

CREATE TABLE institutions (
    id INTEGER DEFAULT nextval('id_institution_sequence'),
    uuid UUID DEFAULT uuid(),
    code VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    region VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    capacity INTEGER NOT NULL,
    children INTEGER NOT NULL,
    leavers INTEGER,
    employees INTEGER,
    inson INTEGER,
    PRIMARY KEY (id)
);


-- Create INSON table
DROP TABLE inson;
DROP SEQUENCE id_inson_sequence;

CREATE SEQUENCE id_inson_sequence START 1;
CREATE TABLE inson (
    id INTEGER DEFAULT nextval('id_inson_sequence'),
    uuid UUID DEFAULT uuid(),
    code VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    region VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    pf INTEGER NOT NULL,
    fth INTEGER NOT NULL,
    children_fth INTEGER NOT NULL,
    leavers_fth INTEGER NOT NULL,
    services VARCHAR,
    PRIMARY KEY (id)
);

INSERT INTO inson
SELECT * FROM st_read('INSON.xlsx', layer = 'Sheet1', open_options = ['HEADERS=FORCE']);



-- Create instrument table QMR
CREATE SEQUENCE id_instrument_qmr_sequence START 1;

CREATE TABLE instrument_qmr (
    id INTEGER DEFAULT nextval('id_instrument_qmr_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_qmr (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument table QMR
CREATE SEQUENCE id_instrument_dsee_sequence START 1;

CREATE TABLE instrument_dsee (
    id INTEGER DEFAULT nextval('id_instrument_dsee_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_dsee (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 1
CREATE SEQUENCE id_instrument_cpis_sequence START 1;

CREATE TABLE instrument_cpis (
    id INTEGER DEFAULT nextval('id_instrument_cpis_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_cpis (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 3
CREATE SEQUENCE id_instrument_csr_sequence START 1;

CREATE TABLE instrument_csr (
    id INTEGER DEFAULT nextval('id_instrument_csr_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_csr (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 7
CREATE SEQUENCE id_instrument_ftch_sequence START 1;

CREATE TABLE instrument_ftch (
    id INTEGER DEFAULT nextval('id_instrument_ftch_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_ftch (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 8
CREATE SEQUENCE id_instrument_pfq_sequence START 1;

CREATE TABLE instrument_pfq (
    id INTEGER DEFAULT nextval('id_instrument_pfq_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_pfq (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 9
CREATE SEQUENCE id_instrument_eef_sequence START 1;

CREATE TABLE instrument_eef (
    id INTEGER DEFAULT nextval('id_instrument_eef_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_eef (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 5
CREATE SEQUENCE id_instrument_yplcs_sequence START 1;

CREATE TABLE instrument_yplcs (
    id INTEGER DEFAULT nextval('id_instrument_yplcs_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_yplcs (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 2
CREATE SEQUENCE id_instrument_cibs_sequence START 1;

CREATE TABLE instrument_cibs (
    id INTEGER DEFAULT nextval('id_instrument_cibs_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_cibs (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

-- Create instrument 5a
CREATE SEQUENCE id_instrument_tqyp_sequence START 1;

CREATE TABLE instrument_tqyp (
    id INTEGER DEFAULT nextval('id_instrument_tqyp_sequence'),
    uuid UUID DEFAULT uuid(),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE values_tqyp (
    instrument_id INTEGER NOT NULL,
    variable VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    PRIMARY KEY (instrument_id, variable)
);

