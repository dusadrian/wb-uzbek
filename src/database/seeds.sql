
INSERT INTO
    uzbek.main.institutions (name, code, address, region, district, type, staffCount, childrenCount, youngAdultCount, childrenHomeCount, patronatCount) 
VALUES
    ('Orphanage', '', '', '', '', '',10, 10, 0, 0, 0),
    ('City', '', '', '', '', '', 0, 0, 10, 10, 10);
    
INSERT INTO
    uzbek.main.users (user_type, username, password, institution_id)
VALUES
    ('localCollector', 'localCollector', 'localCollector', 1),
    ('localCoordinator', 'localCoordinator', 'localCoordinator', 1),
    ('cityCollector', 'cityCollector', 'cityCollector', 2),
    ('evaluator', 'evaluator', 'evaluator', NULL),
    ('regionalCoordinator', 'regionalCoordinator', 'regionalCoordinator', NULL),
    ('main', 'main', 'main', NULL);


INSERT INTO
    uzbek.main.users (user_type, username, password, institution_id)
VALUES
    ('national', 'national', 'national', null);
