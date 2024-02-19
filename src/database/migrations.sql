.open uzbek.duckdb

-- Create user table
CREATE SEQUENCE id_users_sequence START 1;

-- Creates new user defined type 'mood' as an Enum
CREATE TYPE userTypeEnum AS ENUM (
    'localCollector',
    'localCoordinator',
    'cityCollector',
    'regionalCoordinator',
    'evaluator',
    'main'
);

CREATE TABLE uzbek.main.users (
    id INT DEFAULT nextval('id_users_sequence'),
    uuid UUID DEFAULT uuid(),
    userType userTypeEnum,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    institutionId INT,
    PRIMARY KEY (id)
);

-- Create institution table table
CREATE SEQUENCE id_institution_sequence START 1;

CREATE TABLE uzbek.main.institutions (
    id INT DEFAULT nextval('id_institution_sequence'),
    uuid UUID DEFAULT uuid(),
    name VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    atuCode VARCHAR NOT NULL,
    region VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    staffCount INT NOT NULL,
    childrenCount INT NOT NULL,
    youngAdultCount INT NOT NULL,
    childrenHomeCount INT NOT NULL,
    patronatCount INT NOT NULL,
    PRIMARY KEY (id)
);



INSERT INTO
    uzbek.main.institutions (name, code, address, atuCode, region, district, type, staffCount, childrenCount, youngAdultCount, childrenHomeCount, patronatCount) 
VALUES
    ('Orphanage', '', '', '', '', '', '',10, 10, 0, 0, 0),
    ('City', '', '', '', '', '', '', 0, 0, 10, 10, 10);
    
INSERT INTO
    uzbek.main.users (userType, username, password, institutionId)
VALUES
    ('localCollector', 'localCollector', 'localCollector', 1),
    ('localCoordinator', 'localCoordinator', 'localCoordinator', 1),
    ('cityCollector', 'cityCollector', 'cityCollector', 2),
    ('evaluator', 'evaluator', 'evaluator', NULL),
    ('regionalCoordinator', 'regionalCoordinator', 'regionalCoordinator', NULL),
    ('main', 'main', 'main', NULL);
