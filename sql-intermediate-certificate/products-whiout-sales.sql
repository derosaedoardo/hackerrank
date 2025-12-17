SELECT
    p.sku,
    p.product_name
FROM
    product p
LEFT JOIN
    invoice_item i
    ON
    p.id = i.product_id
WHERE i.product_id IS NULL
ORDER BY p.sku ASC;
