import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSelectUserComponent } from './chat-select-user.component';

describe('ChatSelectUserComponent', () => {
  let component: ChatSelectUserComponent;
  let fixture: ComponentFixture<ChatSelectUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSelectUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
