import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Popover, Typography} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

interface Category {
  val: string,
  label: string,
}

interface Filter {
  val: string,
  name: string
}

interface CategorySelectorProps {
  categories: Category[],
  filters: Filter[],
  onChange?: (val: string) => void,
  value?: string,
}

export default function CategorySelector(props: CategorySelectorProps) {
  const {categories, filters, onChange, value} = props

  const [showPanel, setShowPanel] = useState(false)
  const [val, setVal] = useState(value || 'T-Shirts')
  const [filter, setFilter] = useState('92')

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = showPanel ? 'simple-popover' : undefined;

  return (
    <div style={{margin: 10}}>
      <Button variant="outlined" color="primary" 
        endIcon={open ? <ArrowDropUpIcon style={{color: '#4fa49a'}} /> : <ArrowDropDownIcon style={{color: '#4fa49a'}} />} 
        style={{borderRadius: 20, width: 200, borderColor: '#dfdfdf', color: 'black', textTransform: 'none'}} 
        onClick={handleClick}
      >
        Your Categories
      </Button>
      <Popover
        style={{marginTop: 10}}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{display: 'flex', width: 200, flexDirection: 'column', padding: 10}}>
          {categories.map(e => {
            return (
              <div key={e.val} style={{display: 'flex', alignItems: 'center'}} 
              onClick={() => {
                setVal(e.val)
                
                if (onChange) {
                  onChange(e.val)
                }
              }}>
                <div style={{width: 15, height: 15, background: val === e.val ? 'blue' : '#f0f0f0', marginRight: 10}} />
                {e.label}
              </div>
            )
          })
          }
          <Typography style={{fontSize: 14, fontWeight: 500, marginTop: 10, marginBottom: 5}}>Your saved filters</Typography>
          {filters.map(e => {
            return (
              <div style={{background: 'white', color: filter === e.val ? 'blue' : 'black'}}
              onClick={ () => {
                setFilter(e.val)
              }}
              >{e.name}</div>
            )
          })
          }
        </div>
      </Popover>
      
    </div>
  )
}

