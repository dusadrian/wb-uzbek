.open uzbek.duckdb

-- Create user table
CREATE SEQUENCE id_users_sequence START 1;

-- Creates new user defined type 'mood' as an Enum
CREATE TYPE user_typeEnum AS ENUM (
    'localCollector',
    'localCoordinator',
    'cityCollector',
    'regionalCoordinator',
    'evaluator',
    'main'
);

CREATE TABLE users (
    id INTEGER DEFAULT nextval('id_users_sequence'),
    uuid UUID DEFAULT uuid(),
    user_type user_typeEnum,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    institution_id INTEGER,
    first_name VARCHAR NULL,
    patronymics VARCHAR NULL,
    last_name VARCHAR NULL,
    position VARCHAR NULL,
    profession VARCHAR NULL,
    phone VARCHAR NULL,
    email VARCHAR NULL,
    PRIMARY KEY (id)
);

-- Create institution table table
CREATE SEQUENCE id_institution_sequence START 1;

CREATE TABLE institutions (
    id INTEGER DEFAULT nextval('id_institution_sequence'),
    uuid UUID DEFAULT uuid(),
    name VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    atuCode VARCHAR NOT NULL,
    region INTEGER NOT NULL,
    district INTEGER NOT NULL,
    type INTEGER NOT NULL,
    staffCount INTEGER NOT NULL,
    childrenCount INTEGER NOT NULL,
    youngAdultCount INTEGER NOT NULL,
    childrenHomeCount INTEGER NOT NULL,
    patronatCount INTEGER NOT NULL,
    PRIMARY KEY (id)
);

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


INSERT INTO
    institutions (name, code, address, atuCode, region, district, type, staffCount, childrenCount, youngAdultCount, childrenHomeCount, patronatCount)
VALUES
    ('Orphanage', '', '', '', '', '', '',10, 10, 0, 0, 0),
    ('City', '', '', '', '', '', '', 0, 0, 10, 10, 10);

INSERT INTO
    users (user_type, username, password, institution_id)
VALUES
    ('localCollector', 'localCollector', 'localCollector', 1),
    ('localCoordinator', 'localCoordinator', 'localCoordinator', 1),
    ('cityCollector', 'cityCollector', 'cityCollector', 2),
    ('evaluator', 'evaluator', 'evaluator', NULL),
    ('regionalCoordinator', 'regionalCoordinator', 'regionalCoordinator', NULL),
    ('main', 'main', 'main', NULL);








