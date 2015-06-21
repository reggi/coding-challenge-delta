## Coding Challenge Delta

Just a coding challenge that I wanted to put up on github.

```
npm run example
```

## Input

* The first line of the input file is a number `N`
* The rest of the file is rows of cell data
* The cells are seporated via `,`
* The cell data itself doesn't contain `,`

Example input:

```
2
California,Colorado,New York,Vermont
Connecticut,Delaware,New York
Kentucky,Florida,Illinois Indiana,Minnesota
Georgia,New York,Idaho,Kentucky
Connecticut,North Dakota,North Carolina
Ohio,North Carolina,New Mexico,Tennessee
Oklahoma,North Carolina,Connecticut
Wyoming,Wisconsin,Texas,Louisiana
California,New York,Wisconsin,Idaho
```

## Output

* Is sorted alphabetically per line
* Is sorted alphabetically per document
* Exports line-paired-cells that occur `N` times

Example output:

```
California,New York
Connecticut,North Carolina
Idaho,New York
```
