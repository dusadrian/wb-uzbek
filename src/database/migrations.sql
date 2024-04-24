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
    role_name VARCHAR NULL,
    region_code VARCHAR NULL,
    role_code VARCHAR NULL,
    service_type_code VARCHAR NULL,
    q1 VARCHAR NULL,
    q2 VARCHAR NULL,
    q3 VARCHAR NULL,
    q4 VARCHAR NULL,
    q6 VARCHAR NULL,
    q5a VARCHAR NULL,
    q5 VARCHAR NULL,
    q7 VARCHAR NULL,
    q8 VARCHAR NULL,
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
    region VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
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

INSERT INTO
    users (username,password,institution_code,institution_name,name,patronymics,surname,job_title,profession,phone,email,role_name,region_code,role_code,service_type_code,q1,q2,q3,q4,q6,q5a,q5,q7,q8)
VALUES
    ('national', 'national', '', '', '', '', '', '', '', '', '', '', '1703', '100', '', '', '', '', '', '', '', '', '', ''),
    ('regional', 'regional', '', '', '', '', '', '', '', '', '', '', '1703', '10', '', '', '', '', '', '', '', '', '', ''),
    ('evaluator', 'evaluator', '', '', '', '', '', '', '', '', '', '', '1703', '5', '', '', '', '', '', '', '', '', '', ''),
    ('admin_specialit', 'admin_specialit', '', '', '', '', '', '', '', '', '', '', '1703', '4', '1', '', '', '', '', '', '', '', '', ''),
    ('hr_specialit', 'hr_specialit', '', '', '', '', '', '', '', '', '', '', '1703', '3', '1', '', '', '', '', '', '', '', '', ''),
    ('childcare', 'childcare', '', '', '', '', '', '', '', '', '', '', '1703', '2', '1', '', '', '', '', '', '', '', '', ''),
    ('boarding', 'boarding', '', '', '', '', '', '', '', '', '', '', '1703', '2', '4', '', '', '', '', '', '', '', '', ''),
    ('inson', 'inson', '', '', '', '', '', '', '', '', '', '', '1703', '2', '9', '', '', '', '', '', '', '', '', ''),
    ('coordinator_cd', 'coordinator_cd', '', '', '', '', '', '', '', '', '', '', '1703', '1', '1', '', '', '', '', '', '', '', '', ''),
    ('coordinator_boarding', 'coordinator_boarding', '', '', '', '', '', '', '', '', '', '', '1703', '1', '4', '', '', '', '', '', '', '', '', ''),
    ('coordinator_inson', 'coordinator_inson', '', '', '', '', '', '', '', '', '', '', '1703', '1', '9', '', '', '', '', '', '', '', '', '');
    

