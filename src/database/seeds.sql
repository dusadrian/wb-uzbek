
INSERT INTO
    uzbek.main.institutions (name, code, address, region, district, type, staffCount, childrenCount, youngAdultCount, childrenHomeCount, patronatCount) 
VALUES
    ('Orphanage', '', '', '', '', '',10, 10, 0, 0, 0),
    ('City', '', '', '', '', '', 0, 0, 10, 10, 10);
    
INSERT INTO
    uzbek.main.users (userType, username, password, institutionId)
VALUES
    ('localCollector', 'localCollector', 'localCollector', 1),
    ('localCoordinator', 'localCoordinator', 'localCoordinator', 1),
    ('cityCollector', 'cityCollector', 'cityCollector', 2),
    ('evaluator', 'evaluator', 'evaluator', NULL),
    ('regionalCoordinator', 'regionalCoordinator', 'regionalCoordinator', NULL),
    ('main', 'main', 'main', NULL);


