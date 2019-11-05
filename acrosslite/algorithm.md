
TAKEN FROM https://code.google.com/archive/p/puz/wikis/FileFormat.wiki (THANK YOU!!)
BUT FORMATTED NICELY

# Clue Assignment
Nowhere in the file does it specify which cells get numbers or which clues
correspond to which numbers. These are instead derived from the shape of
the puzzle.

Here's a sketch of one way to assign numbers and clues to cells.
First, some helper functions:

Returns true if the cell at (x, y) gets an "across" clue number.

```python
def cell_needs_across_number(x, y): 
  # Check that there is no blank to the left of us
  if x == 0 or is_black_cell(x-1, y):
    # Check that there is space (at least two cells) for a word here
    if x+1 < width and is_black_cell(x+1):
      return True
  return False

def cell_needs_down_number(x, y):
  # ...as above, but on the y axis
```

## And then the actual assignment code:

An array mapping across clues to the "clue number".
So across_numbers[2] = 7 means that the 3rd across clue number
points at cell number 7.

```python
across_numbers = []

cur_cell_number = 1

for y in 0..height:
  for x in 0..width:
    if is_black_cell(x, y):
      continue

    assigned_number = False
    if cell_needs_across_number(x, y):
      across_numbers.append(cur_cell_number)
      cell_numbers[x][y] = cell_number
      assigned_number = True
    if cell_needs_down_number(x, y):
      # ...as above, with "down" instead
    if assigned_number:    
      cell_number += 1
```
