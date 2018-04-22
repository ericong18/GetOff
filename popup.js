// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.getElementById('save').addEventListener('click', saveDefaultTimer);

function saveDefaultTimer() {
  var defaultHours = document.getElementById('Hours').value;
  var defaultMinutes = document.getElementById('Minutes').value;
  console.log(defaultMinutes)
  console.log(defaultHours)
  chrome.storage.sync.set({
    savedDefaultHours: defaultHours,
    savedDefaultMinutes: defaultMinutes
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = "Options saved.";
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

