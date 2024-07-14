-- thumnbnails principales de los posts de tipo code
SELECT p.post_title AS alt, p.guid AS src, 100 AS width, 100 AS height
FROM cp_posts AS p
WHERE
    p.ID IN (
        SELECT pm.meta_valuegit
        FROM `cp_postmeta` AS pm
        WHERE
            pm.meta_key LIKE '%thumbnail%'
    )
    AND p.post_parent IN (
        SELECT p.ID
        FROM cp_posts AS p
        WHERE
            p.ID > 400
            AND p.post_type = 'code'
            AND p.post_status = 'publish'
    );

-- 678, 692, 700, 736, 742, 783, 780  ids
